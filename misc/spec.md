# Project Spec

## Layout
#### Navbar
- Site icon (red)
- Home (boxes icon)
- Movies
- TV
- ~~People (actors)~~
- Bookmark
- Profile
- Details revealed on hover

#### Search
- Search icon ~~(submit button too?)~~
- Search bar
- Search specific to page
- Fuzzy search? (Did you mean: ...)
- Instant search, with debouncing
- Pagination (max 10, 40 per page?)

## Home
#### Trending (Movies + TV)
- Side scroll
- Backdrop image
- **Info:** Year, type, rating
- Text on image
- Bookmark icon in corner

#### Recommended for you (Movies + TV)
- Recommendation algorithm
  - Initially based on popular movies
  - Algo stores search history (movies, tv, actors)
  - Recommend similar to history
  - Orders movies by how frequent they show up in the all the similar categories
- Poster image
- **Info:** Year, type, rating
- Text below image
- Bookmark icon in corner

## Movies, TV
- Same as home

## ~~People~~
#### ~~Trending~~
- ~~Side scroll~~
- ~~Profile image (horizontal)~~
- ~~Name (no info)~~
- ~~Text on image~~
- ~~Bookmark icon in corner~~

#### ~~Recommended for you~~
- ~~Same recommendation algorithm~~
- ~~Vertical image~~
- ~~Name (no info)~~
- ~~Text below image~~
- ~~Bookmark icon in corner~~

## Bookmarks
#### Movies, TV, People
- Same as cards above
- Search includes (title, genre, keywords)

## Profile
- No search
- Table:
  - Movie/TV backdrop image
  - Name
  - Year?
  - Type
  - Your rating (in stars)
  - Delete rating

## Movie Details
- No search
- Movie backdrop (full res)
- Title
- Description
- Release date, runtime, rating
- Genres
- Collection? (unlikely)
- Trailer
- Cast:
  - Side scroll
  - Circular pic
  - Name
  - Charcter name
  - View more cast button
- Similar movies
- Add rating in stars
- Reviews:
  - Name
  - Profile pic
  - Date
  - Rating
  - Content
  - View full review button

#### ~~Cast view more~~
- ~~Back button~~
- ~~Table view~~
- ~~Profile pic~~
- ~~Name~~
- ~~Character name~~
- ~~View more button?~~

#### ~~Review full view~~
- ~~Back button~~
- ~~Same as above~~

## TV Details
- Same as movie
- PLUS seasons and episode details:
  - Season tab
  - Episode image
  - Season + episode number (S0X E0X)
  - No info page on episodes


## Person Details
- Name 
- Image
- Bio:
  - Links to movies/tv found in bio
- Social media links:
  - Facebook
  - Twitter
  - Instagram
  - IMDB
- Movie credits (Character name)
- TV credits (Character name)
- ~~Images (can't be opened)~~