# Optimizing Your Job Search - Job filtering tips for LinkedIn, Who is Hiring?, and Hacker News

I recently went through an extensive job search and thankfully managed to land a new role. This article is to share some of the techniques I used to optimize my job search through filtering on [LinkedIn](https://www.linkedin.com), [Who is Hiring?](https://whoishiring.io), and [Hacker News](https://news.ycombinator.com). This is mainly targeted at people in tech since Who is Hiring? and Hacker News are sites that primary list tech jobs, but the LinkedIn tips should still apply to those outside of tech.

## Tip #1: Use boolean search queries on LinkedIn

LinkedIn provides great support for boolean search queries. This is a very powerful tool. The only thing to note is that search queries have a max character length, so you might have to split them into multiple search queries.

### Example

#### Search query

`("javascript" OR "react" OR "angular") AND ("artificial intelligence" OR "machine learning" OR "ml" OR "ai" OR "deep learning")`

## Tip #2: Filter by more custom titles on LinkedIn

LinkedIn allows the ability to filter by certain general titles such as `Software Engineer`. However, you might be interested in filtering by more custom titles. For example, I might be interested in a front end role that could have a variety of titles such as `Front End Engineer` or `UI Engineer`. This is one of the reasons I created the [LinkedIn jobs filter user script](https://greasyfork.org/en/scripts/410048-linkedin-jobs-filter). If you are unfamiliar with user scripts, check out the [Greasy Fork user script description page](https://greasyfork.org/en/help/installing-user-scripts). But to sum it up, they are just scripts that modify a site within the browser. This user script removes jobs that do not match the given filters.

### Example

#### Search query

`("javascript" OR "react" OR "angular") AND ("artificial intelligence" OR "machine learning" OR "ml" OR "ai" OR "deep learning")`

#### User script config

```js
var desiredTitles = [
  'frontend',
  'front-end',
  'front end',
  'ui engineer',
  'user interface',
  'web',
];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinDesiredTitlesBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinDesiredTitlesAfter.png)

Here I only keep jobs that have `frontend`, `front-end`, `front end`, `ui engineer`, `user interface`, or `web` in the title.

## Tip #3: Filter out certain titles on LinkedIn

You might want to filter out jobs that commonly appear based on the search query, but that are not what you are looking for. For example, full-stack positions might frequently appear since it shares a skill set with front end roles. To filter these out, you can also leverage the [LinkedIn jobs filter user script](https://greasyfork.org/en/scripts/410048-linkedin-jobs-filter).

### Example

#### Search query

`("javascript" OR "react" OR "angular") AND ("artificial intelligence" OR "machine learning" OR "ml" OR "ai" OR "deep learning")`

#### User script config

```js
var undesiredTitles = ['full', 'manager', 'remote'];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinUndesiredTitlesBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinUndesiredTitlesAfter.png)

Here I filter out jobs that have `full`, `manager`, or `remote` in the title.

## Tip #4: Filter out undesired companies on LinkedIn

During my job search, I encountered certain companies that I was not interested in but appeared quite a bit. These included staffing agencies, stealth startups, and others. To get rid of these undesired companies, you can also leverage the [LinkedIn jobs filter user script](https://greasyfork.org/en/scripts/410048-linkedin-jobs-filter).

### Example

#### Search query

`("javascript" OR "react" OR "angular") AND ("artificial intelligence" OR "machine learning" OR "ml" OR "ai" OR "deep learning")`

#### User script config

```js
var undesiredCompanies = ['Facebook', 'Optello'];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinUndesiredCompaniesBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinUndesiredCompaniesAfter.png)

Here I filter out jobs from `Facebook` and `Optello`.

## Tip #5: Filter jobs landing page on LinkedIn

When you visit the [LinkedIn jobs landing page](https://www.linkedin.com/jobs), you are presented with jobs that LinkedIn recommends based on your profile. These are good recommendations, but you might want to also filter these. You can also leverage the [LinkedIn jobs filter user script](https://greasyfork.org/en/scripts/410048-linkedin-jobs-filter) for this.

### Example

#### User script config

```js
var desiredTitles = [
  'frontend',
  'front-end',
  'front end',
  'ui engineer',
  'user interface',
  'web',
];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinJobsPageBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/linkedinJobsPageAfter.png)

Here I only keep jobs that have `frontend`, `front-end`, `front end`, `ui engineer`, `user interface`, or `web` in the title.

## Tip #6: Filter by title on Who is Hiring?

[Who is Hiring?](https://whoishiring.io) has plenty of jobs but does not allow filtering based on job title, so I created the [Who is Hiring? jobs filter user script](https://greasyfork.org/en/scripts/410049-who-is-hiring-jobs-filter). This user script continuously fetches more jobs while only keeping the ones that match the filters. This allows you to do a broad search and narrow down the results client-side.

### Example

#### Search query

`artificial intelligence machine learning deep learning ai ml dl`

#### User script config

```js
var desiredTitles = [
  'frontend',
  'front-end',
  'front end',
  'ui engineer',
  'user interface',
  'web',
];
var undesiredTitles = ['data', 'manager'];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/whoIsHiringTitleBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/whoIsHiringTitleAfter.png)

Here I only keep jobs that have `frontend`, `front-end`, `front end`, `ui engineer`, `user interface`, or `web` in the title, and filter out jobs that have have `data` or `manager` in the title.

## Tip #7: Filter by location on Who is Hiring?

Even though Who is Hiring? provides an input to limit jobs to a certain location, you can still end up with undesired locations. Also, you might want to filter out remote jobs.

### Example

#### Search query

`front end security`

#### User script config

```js
var undesiredLocations = ['remote', 'Canada'];
```

#### Before

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/whoIsHiringLocationBefore.png)

#### After

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/whoIsHiringLocationAfter.png)

Here I filter out jobs that have `remote` or `Canada` in the location.

## Tip #8: Use boolean search queries on Hacker News

Once a month, a post is created on Hacker News titled "Who is Hiring?" that lists new tech jobs. There are a few sites that facilitate searching through these job postings, but the one I found to be the most useful was [hnjobs.emilburzo.com](https://hnjobs.emilburzo.com), primarily for its boolean search query ability.

### Example

#### Search query

`("frontend" | "front-end" | "front end" | "ui engineer" | "user interface" | "javascript") + ("artificial intelligence" | "machine learning" | "deep learning" | "ai" | "ml" | "dl")`

![](https://raw.githubusercontent.com/christianmemije/jobfilters/master/article/hackernewsBoolean.png)

## Conclusion

Well, those are a few of the techniques I used to optimize my job search through filtering on these 3 great job sites. I hope you can leverage some of these tips and user scripts in your next job search. Best of luck!

## Useful Links

- [LinkedIn jobs filter user script](https://greasyfork.org/en/scripts/410048-linkedin-jobs-filter)
- [Who is Hiring? jobs filter user script](https://greasyfork.org/en/scripts/410049-who-is-hiring-jobs-filter)
- [Github repo containing the user scripts](https://github.com/christianmemije/jobfilters)
