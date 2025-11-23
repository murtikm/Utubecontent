import requests, json, os

prompt = "Write a 1-minute YouTube explainer script about AI on CPU"

# Call Ollama API
resp = requests.post("http://ollama:11434/api/generate", json={"model": "phi3", "prompt": prompt})
script = resp.json().get("response", "No script generated.")

os.makedirs("/output", exist_ok=True)
with open("/output/script.txt", "w") as f:
    f.write(script)
