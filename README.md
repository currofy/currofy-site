# currofy-site

[![Join the chat at https://gitter.im/currofy/currofy-site](https://badges.gitter.im/currofy/currofy-site.svg)](https://gitter.im/currofy/currofy-site?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is the repo for the site  https://currofy.com - The community driven platform to help you grow. You can actually start growing by [helping](https://github.com/currofy/currofy-site/blob/dev/CONTRIBUTING.md) here :-)

It's a simple and static generated site using [Hugo](https://github.com/gohugoio/hugo), HTML and vanilla CSS/JS. It's deployed an hosted on Netlify.

## Stack so far
- Hugo 
- HTML
- Vanilla CSS
- Vanilla JS
- Netlify

Feel free to suggest any tech, the site is just a playground.

## Found a bug? 👷‍♀️ Like to suggest an improvement? ☀️

Thanks for letting us know! Please see our [guidelines](https://github.com/currofy/currofy-site/blob/dev/CONTRIBUTING.md) and [file an issue](https://github.com/currofy/currofy-site/issues/new?assignees=&labels=&template=bug_report.md&title=) and a team member should reply shortly.

## Building the site 🏗

Firstly, you need to have Hugo installed. If you don't already have Hugo installed please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

### Create a new Hugo site

```
hugo new site mynewsite
```

This will create a fresh Hugo site in the folder `mynewsite`.


#### Install with Git

```
cd mynewsite
git clone https://github.com/currofy/currofy-site.git 
```

### Run Hugo

After installing the theme for the first time, generate the Hugo site.

You run this command from the root folder of your Hugo site ie `mynewsite/`

```
hugo
```

For local development run Hugo's built-in local server.

```
hugo server
```
To see hidden draft pages run:

```
hugo server -D
```
Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## Credits

- Beautiful royalty free Illustrations by https://undraw.co/
- Icons by https://simpleicons.org/
- A few `css` tricks from https://bryanhadaway.com/how-to-create-circles-with-css/
- Currofy's logo from https://www.machodominante.es/pack-de-iconos-de-sevilla-totalmente-gratis/
