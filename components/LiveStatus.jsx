"use client";

import { useEffect, useState, useRef } from "react";

export default function LiveStatus({ dict }) {
  const githubUsername = "PourhajiDeV";
  const discordId = "517417458689376288";
  const lastfmUsername = "PourhajiDeV";
  const lastfmApiKey = "b25b959554ed76058ac220b7b2e0a026";

  const [spotify, setSpotify] = useState(null);
  const [github, setGithub] = useState({ repos: 17, followers: 4, stars: 1 });
  const [discordStatus, setDiscordStatus] = useState("offline");
  const [discordUser, setDiscordUser] = useState(null);

  const [currentMs, setCurrentMs] = useState(0);
  const [totalMs, setTotalMs] = useState(0);

  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [lanyardRes, lastfmRes, githubUserRes, githubReposRes] = await Promise.allSettled([
          fetch(`https://api.lanyard.rest/v1/users/${discordId}`),
          fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${lastfmApiKey}&format=json&limit=1`),
          fetch(`https://api.github.com/users/${githubUsername}`),
          fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
        ]);

        let hasLanyardSpotify = false;

        if (lanyardRes.status === "fulfilled" && lanyardRes.value.ok) {
          const lData = await lanyardRes.value.json();
          if (lData.success && lData.data) {
            setDiscordStatus(lData.data.discord_status || "offline");
            setDiscordUser(lData.data.discord_user || null);

            if (lData.data.spotify) {
              hasLanyardSpotify = true;
              const sp = lData.data.spotify;
              const start = sp.timestamps?.start || 0;
              const end = sp.timestamps?.end || 0;
              const dur = end - start;
              const cur = Math.max(0, Date.now() - start);

              setTotalMs(dur);
              setCurrentMs(cur);

              setSpotify({
                isPlaying: true,
                isRealtime: true,
                song: sp.song,
                artist: sp.artist,
                album: sp.album,
                album_art_url: sp.album_art_url,
                url: `https://open.spotify.com/track/${sp.track_id}`,
                startTime: start,
                endTime: end
              });
            }
          }
        }

        if (!hasLanyardSpotify && lastfmRes.status === "fulfilled" && lastfmRes.value.ok) {
          const lfmData = await lastfmRes.value.json();
          const latestTrack = lfmData?.recenttracks?.track?.[0];

          if (latestTrack) {
            const isNowPlaying = latestTrack["@attr"]?.nowplaying === "true";
            const images = latestTrack.image || [];
            const coverUrl = images[images.length - 1]?.["#text"] || "";

            let previewUrl = null;
            try {
              const itunesSearch = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(latestTrack.name + " " + latestTrack.artist?.["#text"])}&entity=song&limit=1`).then(r => r.json());
              if (itunesSearch?.results?.[0]) {
                previewUrl = itunesSearch.results[0].previewUrl || null;
              }
            } catch (e) {}

            setSpotify(prev => {
              if (prev?.isRealtime) return prev;
              return {
                isPlaying: isNowPlaying,
                isRealtime: false,
                song: latestTrack.name,
                artist: latestTrack.artist?.["#text"] || "",
                album: latestTrack.album?.["#text"] || "",
                album_art_url: coverUrl,
                url: latestTrack.url,
                previewUrl: previewUrl
              };
            });
          }
        }

        if (githubUserRes.status === "fulfilled" && githubUserRes.value.ok) {
          const gUser = await githubUserRes.value.json();
          if (gUser && gUser.public_repos !== undefined) {
            let stars = 1;
            if (githubReposRes.status === "fulfilled" && githubReposRes.value.ok) {
              const gRepos = await githubReposRes.value.json();
              if (Array.isArray(gRepos)) {
                stars = gRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
              }
            }
            setGithub({
              repos: gUser.public_repos,
              followers: gUser.followers,
              stars: stars
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchStats();
    const interval = setInterval(fetchStats, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!spotify?.isRealtime || !spotify?.startTime || !spotify?.endTime) return;

    const timer = setInterval(() => {
      const cur = Date.now() - spotify.startTime;
      const total = spotify.endTime - spotify.startTime;
      if (cur <= total) {
        setCurrentMs(cur);
        setTotalMs(total);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [spotify]);

  const togglePlayAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current || !spotify?.previewUrl) return;

    if (isPlayingPreview) {
      audioRef.current.pause();
      setIsPlayingPreview(false);
    } else {
      audioRef.current.play();
      setIsPlayingPreview(true);
    }
  };

  const formatMs = (ms) => {
    const totalSecs = Math.floor(ms / 1000);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const getDiscordStatusBadge = () => {
    switch (discordStatus) {
      case "online":
        return { label: dict.liveStatus.comms.online, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", dot: "bg-emerald-500 shadow-[0_0_10px_#10B981]" };
      case "idle":
        return { label: dict.liveStatus.comms.idle, color: "text-amber-400 bg-amber-500/10 border-amber-500/30", dot: "bg-amber-500 shadow-[0_0_10px_#F59E0B]" };
      case "dnd":
        return { label: dict.liveStatus.comms.dnd, color: "text-rose-400 bg-rose-500/10 border-rose-500/30", dot: "bg-rose-500 shadow-[0_0_10px_#EF4444]" };
      default:
        return { label: dict.liveStatus.comms.offline, color: "text-zinc-400 bg-zinc-500/10 border-zinc-500/30", dot: "bg-zinc-600" };
    }
  };

  const statusBadge = getDiscordStatusBadge();
  const realProgressPercent = totalMs > 0 ? Math.min((currentMs / totalMs) * 100, 100) : 0;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
      {spotify?.previewUrl && (
        <audio
          ref={audioRef}
          src={spotify.previewUrl}
          onEnded={() => setIsPlayingPreview(false)}
        />
      )}

      <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {dict.liveStatus.badge}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {dict.liveStatus.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl">
          {dict.liveStatus.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-12 lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none opacity-60"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.307c-.215.352-.676.464-1.028.249-2.816-1.721-6.36-2.11-10.536-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.483-.598 11.648 1.338.352.215.464.676.249 1.028zm1.464-3.257c-.27.44-.847.578-1.287.308-3.224-1.982-8.14-2.557-11.954-1.399-.494.15-1.02-.132-1.17-.626-.15-.494.132-1.02.626-1.17 4.364-1.324 9.78-.68 13.477 1.599.44.27.578.847.308 1.288zm.126-3.41c-3.864-2.295-10.24-2.507-13.934-1.385-.593.18-1.22-.162-1.4-.755-.18-.593.162-1.22.755-1.4 4.246-1.29 11.287-1.043 15.733 1.597.534.317.708 1.01.391 1.544-.316.533-1.009.708-1.545.399z"/>
                </svg>
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
                {dict.liveStatus.spotify.tag}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${spotify?.isPlaying ? "bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" : "bg-zinc-400 dark:bg-zinc-600"}`}></span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                {spotify?.isPlaying ? (spotify.isRealtime ? dict.liveStatus.spotify.listening : dict.liveStatus.spotify.recent) : dict.liveStatus.spotify.idleTitle}
              </span>
            </div>
          </div>

          {spotify ? (
            <div className="relative z-10 flex flex-col gap-4 my-auto">
              <div className="flex items-center gap-5">
                <div className="relative group/cover shrink-0 cursor-pointer" onClick={spotify.previewUrl ? togglePlayAudio : undefined}>
                  {spotify.album_art_url ? (
                    <img
                      src={spotify.album_art_url}
                      alt={spotify.album || "Album"}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-2xl ring-2 ring-zinc-900/10 dark:ring-white/10 group-hover/cover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    </div>
                  )}

                  {spotify.previewUrl && (
                    <div className="absolute inset-0 rounded-2xl bg-black/50 flex items-center justify-center backdrop-blur-xs opacity-0 group-hover/cover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/50">
                        {isPlayingPreview ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0 w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {dict.liveStatus.spotify.track}
                    </span>
                    {spotify.isPlaying && (
                      <div className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 h-3 bg-emerald-500 animate-pulse"></span>
                        <span className="w-0.5 h-2 bg-emerald-500 animate-ping"></span>
                        <span className="w-0.5 h-3 bg-emerald-500 animate-bounce"></span>
                      </div>
                    )}
                  </div>

                  <a href={spotify.url} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white truncate hover:text-emerald-500 transition-colors">
                    {spotify.song}
                  </a>
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                    {spotify.artist} {spotify.album ? `• ${spotify.album}` : ""}
                  </span>

                  {spotify.previewUrl && (
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={togglePlayAudio}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        {isPlayingPreview ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                            <span>توقف پیش‌نمایش</span>
                          </>
                        ) : (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            <span>پیش‌نمایش ترک</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {spotify.isRealtime && totalMs > 0 && (
                <div className="w-full mt-2 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-linear shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                      style={{ width: `${realProgressPercent}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400 mt-1.5">
                    <span>{formatMs(currentMs)}</span>
                    <span>{formatMs(totalMs)}</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="relative z-10 flex items-center gap-4 py-8">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                  {dict.liveStatus.spotify.idleTitle}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {dict.liveStatus.spotify.idleDesc}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-12 lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none opacity-60"></div>
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
              {dict.liveStatus.comms.tag}
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full border bg-blue-500/10 text-blue-500 border-blue-500/20 font-mono">
              Identity Hub
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 relative z-10 mb-4">
            <div className="relative shrink-0">
              <img
                src="/profile.jpg"
                alt="Amirtaha Pourhaji Motabi"
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-md"
              />
              <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-zinc-900 ${statusBadge.dot}`}></span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-zinc-900 dark:text-white">
                  {discordUser?.global_name || "Amirtaha Pourhaji Motabi"}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${statusBadge.color}`}>
                  {statusBadge.label}
                </span>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                Full Stack Developer • UI/UX Designer • Python & Java
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 relative z-10">
            
            <a
              href="https://t.me/PourhajiDeV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-sky-500/60 hover:bg-sky-500/10 hover:-translate-y-1 transition-all duration-300 group/btn text-center"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-1.5 group-hover/btn:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-white">تلگرام</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">@PourhajiDeV</span>
            </a>

            <a
              href="https://instagram.com/pourhaji.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-pink-500/60 hover:bg-pink-500/10 hover:-translate-y-1 transition-all duration-300 group/btn text-center"
            >
              <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-1.5 group-hover/btn:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-white">اینستاگرام</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">@pourhaji.dev</span>
            </a>

            <a
              href="https://discord.com/users/517417458689376288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group/btn text-center"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-1.5 group-hover/btn:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-white">دیسکورد</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-0.5">@{discordUser?.username || "pourhajidev"}</span>
            </a>

          </div>
        </div>

        <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
                  {dict.liveStatus.github.tag}
                </span>
                <span className="text-xs font-mono text-amber-500 font-bold block">
                  github.com/{githubUsername}
                </span>
              </div>
            </div>

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-105 transition-transform"
            >
              <span>{dict.liveStatus.github.viewProfile}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10 mb-6">
            <div className="lg:col-span-8 flex flex-col justify-between p-5 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 min-h-[220px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  {dict.liveStatus.github.graphTitle}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ● Real-Time
                </span>
              </div>
              <div className="w-full h-full min-h-[160px] flex items-center justify-center overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/00DC82/${githubUsername}`}
                  alt="GitHub Contribution Calendar"
                  className="w-full min-w-[580px] h-auto object-contain brightness-90 contrast-125"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 min-h-[220px]">
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-3 self-start">
                Commit Streak
              </span>
              <div className="w-full flex-1 flex items-center justify-center">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&hide_border=true&background=00000000&ring=10B981&fire=10B981&currStreakNum=10B981&sideNums=A1A1AA&sideLabels=71717A&dates=71717A`}
                  alt="GitHub Streak"
                  className="w-full max-h-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white font-mono">
                {github.repos}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-bold mt-1">
                {dict.liveStatus.github.repos}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-amber-500 font-mono">
                {github.followers}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-bold mt-1">
                Followers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl font-black text-emerald-500 font-mono">
                {github.stars}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-bold mt-1">
                Total Stars
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}