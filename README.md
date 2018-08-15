
# ChatCredits
We built this Twitch-integrated chat credits generator live on Twitch!

## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Credits ##
Thank you too all the participants of this project!

**Thedudeskee, kaisuke, Zoraketh, blackdawn1980, That_MS_Gamer, Neo_TA, Instafriend, sparky_pugwash, MacabreMan2, GeoRevilo, nightsilas, guthron, BungalowGlow, RikuRinku, VioletOsK, ChampionTofu, TheUnderdogTM, QeraiX**

## Instructions ##

1. Install NodeJS - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Open the directory in a Command Prompt/Terminal
3. Install Dependencies: `npm install`
4. Get a Twitch Chat OAuth Password Token - [http://twitchapps.com/tmi/](http://twitchapps.com/tmi/)
4. Create a file named `.env` that looks like this:
```javascript
PORT=8000
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```
5. Run Server: `npm start`
6. View the webpage from your web browser! [http://localhost:8000](http://localhost:8000)

