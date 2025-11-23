FROM jrottenberg/ffmpeg:4.4-ubuntu
COPY build_video.py /build_video.py
CMD ["python3", "/build_video.py"]
