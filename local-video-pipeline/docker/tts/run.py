from TTS.api import TTS
import os

os.makedirs("/output", exist_ok=True)

# Read input script
with open("/input/script.txt") as f:
    text = f.read()

# Initialize TTS model (CPU)
tts = TTS(model_name="tts_models/en/ljspeech/tacotron2-DDC", progress_bar=False)
tts.tts_to_file(text=text, file_path="/output/audio.mp3")
