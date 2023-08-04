# About

This is a fork of [@poradrian](https://github.com/poradrian)'s [startpage repo](https://github.com/poradrian/startpage) which is a front-end project that was built using vanilla CSS and JavaScript, and it's intended to be an alternative to the usual browser homepages. By using it, the users can add and visit sites by typing the corresponding keys.

## Usage

- To visit a site, the user enters the key associated with the site.
- If a site has a search option, the user can type a colon after the site’s key, then the query
- If the user wants to navigate to a specific, the user can type a forward slash after the site’s key, then the specific page
- If the user wants to use Google search, he can type the asterisk, followed by the query
- If the user wants to use DuckDuckGo search, he can type the minus symbol, followed by the query.

## Examples
- Entering `rd` will redirect to <reddit.com>
- Entering `rd:piracy` will search `piracy` on Reddit
- Entering `rd/r/piracy` will go to the page <reddit.com/r/piracy>
- Entering `*piracy` will search `piracy` on Google
- Entering `-piracy` will search `piracy` on DuckDuckGo

Using the local storage, users can add or remove sites; they can also check how is the weather in various cities, with data being fetched from the [Open Weather Map API](https://openweathermap.org/)
