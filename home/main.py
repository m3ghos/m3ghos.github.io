from os import system
system('pip install flask')
system('pip install pytube')
from flask import Flask , request
from pytube import YouTube

app = Flask('yt')

def json_info(url):
    yt = YouTube(url)
    high = yt.streams.get_highest_resolution().url
    low = yt.streams.get_lowest_resolution().url
    views = yt.views
    title = yt.title
    thumb = yt.thumbnail_url
    return {
        'high':high,
        'low':low,
        'views':str(views),
        'title':title,
        'thumb':thumb,
    }

@app.route('/yt')
def ok():
    try:
        url = request.args.get('url')
        return json_info(url)
    except Exception as e:
        return str(e)

app.run(host='0.0.0.0',port=8800)
