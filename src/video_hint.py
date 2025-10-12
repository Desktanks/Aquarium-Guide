import json

# Load video data once when the app starts
with open("src/video_links.json", encoding="utf-8") as f:
    VIDEO_DB = json.load(f).get("video_links", [])

def append_video_hint(user_text: str, intent: str) -> str:
    """Returns a 🎥 video suggestion line based on matching keywords and intent."""
    q = (user_text or "").lower()
    for e in VIDEO_DB:
        if e.get("intent") in (intent, "general"):
            kws = [k for k in e.get("keywords", []) if k]
            if any(kw in q for kw in kws):
                url = (e.get("video_url") or "").strip()
                title = e.get("video_title") or ""
                if url:
                    return f"\n\n🎥 Watch: {title} — {url}"
    return ""
