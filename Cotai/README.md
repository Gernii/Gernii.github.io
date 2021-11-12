# cotai.gitlab.io



### How to deploy saved source of a website (plain html) via gitlab page

1. Create a new project under user/group on gitlab that follows this naming convention: `namespace.gitlab.io`, where `namespace` is your `username` or `groupname`. This can be done by navigating to your project's **Settings**. Read more about [user/group Pages](https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages) and [project Pages](https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages).
2. Go to Setting/General/Visibility, project features, permissions/Pages, and select `Everyone` 
3. Ex. The saved source of website named `Home - Fruits_files.zip`. 
   1. Unzip
   2. Update `Home - Fruits_files.htm` to `index.html`
   3. Update folder `Home - Fruits_files` to `assets`
   4. Update all text in `index.html` from `href="./Home - Fruits_files/..."` to `href="assets/..."`
4. Push commit to a new branch
5. Create new MR on gitlab webpage
6. The website will be build automatically right after merging to branch master
7. Visit website at `https://namespace.gitlab.io`. In this case, the website is at `https://vncotai.gitlab.io`

### Troubleshooting

1. JS/CSS/image... are missing! That means that you have wrongly set up the CSS URL in your HTML files. Have a look at the [index.html](https://gitlab.com/pages/plain-html/blob/master/public/index.html) for an example.

### Reference

Learn more about GitLab Pages at https://pages.gitlab.io and the official documentation https://docs.gitlab.com/ce/user/project/pages/.