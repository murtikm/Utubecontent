import os
import subprocess

os.makedirs("/output", exist_ok=True)

background = "/templates/backgrounds/background.mp4"
audio = "/input/audio.mp3"
final = "/output/final.mp4"

cmd = [
    "ffmpeg", "-y",
    "-i", background,
    "-i", audio,
    "-c:v", "copy",
    "-c:a", "aac",
    final
]

subprocess.run(cmd)
