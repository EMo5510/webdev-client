export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Beat two eggs.</li>
        <li>
          Season with salt, chicken bouillon, sesame oil, and a dash of white
          pepper.
        </li>
        <li>Stir and add one cup of hot water into the mixture.</li>
        <li>Eliminate any bubbles/foam.</li>
        <li>Steam for 15 minutes.</li>
        <li>Serve and enjoy!</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Educated</li>
        <li>Harry Potter</li>
        <li>Crying in H Mart</li>
        <li>All the Light We Cannot See</li>
      </ul>

      HTML tags covered in this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 through h6 — headings from largest to smallest</li>
        <li>p — wraps a paragraph and adds vertical spacing</li>
        <li>ol — an ordered list where the order of the steps matters</li>
        <li>ul — an unordered list of items with bullets</li>
        <li>li — a single item inside an ordered or unordered list</li>
        <li>table — rows and columns of tabular data</li>
        <li>span — groups inline text without starting a new line</li>
      </ul>
    </div>
  );
}
