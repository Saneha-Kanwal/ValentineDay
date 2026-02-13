#!/bin/bash

# Script to download "Vy Hania Vy Dil Jania" song
# Make sure yt-dlp is installed: pip install yt-dlp

echo "Searching for 'Vy Hania Vy Dil Jania' song..."
echo ""

cd "$(dirname "$0")"

# Try to download the song
yt-dlp --extract-audio \
       --audio-format mp3 \
       --audio-quality 0 \
       --default-search "ytsearch1" \
       --output "romantic-song.%(ext)s" \
       "vy hania vy dil jania romantic song" \
       --no-warnings

if [ -f "romantic-song.mp3" ]; then
    echo ""
    echo "✅ Song downloaded successfully!"
    echo "File: romantic-song.mp3"
    echo ""
    # Check duration
    if command -v ffprobe &> /dev/null; then
        duration=$(ffprobe -i romantic-song.mp3 -show_entries format=duration -v quiet -of csv="p=0")
        minutes=$(echo "$duration / 60" | bc -l | cut -d. -f1)
        echo "Duration: ${minutes} minutes"
    fi
else
    echo ""
    echo "❌ Download failed. Please try manually:"
    echo ""
    echo "Option 1: Use online converter"
    echo "1. Search 'Vy Hania Vy Dil Jania' on YouTube"
    echo "2. Copy the video URL"
    echo "3. Go to y2mate.com or ytmp3.cc"
    echo "4. Paste URL and download as MP3"
    echo "5. Rename to 'romantic-song.mp3' and place in this folder"
    echo ""
    echo "Option 2: Use yt-dlp with direct URL"
    echo "1. Find the YouTube video URL"
    echo "2. Run: yt-dlp --extract-audio --audio-format mp3 -x 'YOUTUBE_URL' -o 'romantic-song.%(ext)s'"
fi

