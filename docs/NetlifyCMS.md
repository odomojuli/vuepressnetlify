---
title: NetlifyCMS
---
# NetlifyCMS

## NetlifyCMS configuration

![NetlifyCMS](/.vuepress/dist/vuepress-deploy.jpg)

In '.vuepress/public/admin/config.yml'


Change repo name

```
backend:
  name: github
  repo: odomojuli/VuePressNetlify
  branch: master
```

Add an OAuth app to your GitHub account: 


https://github.com/settings/developers

For Authorization callback URL, enter:


https://api.netlify.com/auth/done

GitHub provides Client ID and Client Secret

```
Go to Netlify and select your project.
Navigate to: Settings > Access control > OAuth
Under Authentication Providers, click Install Provider.
Select GitHub, enter the Client ID and Client Secret, then save.
```

Access NetlifyCMS with '/admin'

##
