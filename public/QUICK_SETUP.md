# Quick Setup Guide for Song

## Step 1: Download the Song

### Easy Method (Recommended):
1. Open YouTube and search: **"Vy Hania Vy Dil Jania"**
2. Copy the video URL
3. Go to one of these websites:
   - https://y2mate.com
   - https://ytmp3.cc
   - https://onlinevideoconverter.com
4. Paste the YouTube URL
5. Select **MP3** format
6. Click **Download**
7. Make sure the file is at least **3 minutes** long

### Alternative Method (Using Terminal):
```bash
cd /home/sanehakanwal/Documents/valentine/public
./download_song.sh
```

## Step 2: Place the File

1. **Rename** the downloaded file to: `romantic-song.mp3`
2. **Move** it to: `/home/sanehakanwal/Documents/valentine/public/`
3. The final path should be: `public/romantic-song.mp3`

## Step 3: Verify

1. Start your app: `npm run dev`
2. Open the website
3. The song should start playing automatically! 🎵

## File Checklist
- ✅ File name: `romantic-song.mp3`
- ✅ Location: `public/romantic-song.mp3`
- ✅ Format: MP3
- ✅ Duration: At least 3 minutes
- ✅ File exists in public folder

## Need Help?
- Check browser console (F12) for any errors
- Make sure file name is exactly `romantic-song.mp3`
- Ensure file is in `public` folder, not `src` folder

