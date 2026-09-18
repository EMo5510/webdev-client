"use client";

export default function YourForm() {
  return (
    <div id="wd-forms-personal">
      <h3>Student Profile</h3>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="wd-first-name">First name:</label>
        <input type="text" title="Elaine" id="wd-first-name" /> <br />
        <label htmlFor="wd-last-name">Last name:</label>
        <input
          placeholder="Mo"
          defaultValue="Mo"
          title="The last name"
          id="wd-last-name"
        />
        <br />
        <label htmlFor="wd-password">Password:</label>
        <input type="password" defaultValue="123@#$asd" id="wd-password" />
        <br />
        <br />
        <label>Why I&apos;m Taking this Course:</label>
        <br />
        <textarea
          id="wd-textarea"
          cols={30}
          rows={5}
          defaultValue="Web development is extremely relevant and applicable in modern times and learning the skills and the internal workings of a website is useful for personal and professional purposes."
        />
        <br />
        <br />
        <label>Class Standing:</label>
        <br />
        <input type="radio" name="class-standing" id="wd-freshman" />
        <label htmlFor="wd-freshman">Freshman</label>
        <br />
        <input type="radio" name="class-standing" id="wd-sophomore" />
        <label htmlFor="wd-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="class-standing" id="wd-junior" />
        <label htmlFor="wd-junior">Junior</label>
        <br />
        <input type="radio" name="class-standing" id="wd-senior" />
        <label htmlFor="wd-senior">Senior</label>
        <br />
        <input type="radio" name="class-standing" id="wd-graduate" />
        <label htmlFor="wd-graduate">Graduate</label>
        <br />
        <br />
        <label>Residing:</label>
        <br />
        <input type="radio" name="radio-living" id="wd-on-campus" />
        <label htmlFor="wd-on-campus">On campus</label>
        <br />
        <input type="radio" name="radio-living" id="wd-commuter" />
        <label htmlFor="wd-commuter">Commuter</label>
        <br />
        <br />
        <label>Programming Language:</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-java" />
        <label htmlFor="wd-chkbox-java">Java</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-python" />
        <label htmlFor="wd-chkbox-python">Python</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-c" />
        <label htmlFor="wd-chkbox-c">C</label>
        <br />
        <input type="checkbox" name="check-language" id="wd-chkbox-racket" />
        <label htmlFor="wd-chkbox-racket">Dr.Racket</label>
        <br />
        <br />
        <label htmlFor="wd-select-major">Major: </label>
        <br />
        <select id="wd-select-major" defaultValue="COMSCI">
          <option value="COMSCI">Computer Science</option>
          <option value="CYBER">Cybersecurity</option>
          <option value="COMENG">Computer Engineering</option>
          <option value="OTHER">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="wd-select-topics">Topics you want to deepen: </label>
        <br />
        <select multiple id="wd-select-topics" defaultValue={["CSS", "API"]}>
          <option value="CSS">CSS</option>
          <option value="JAVASCRIPT">Javascript</option>
          <option value="API">Integrating APIs</option>
          <option value="DATABASE">Databases</option>
        </select>
        <br />
        <br />
        <label htmlFor="wd-school-email">School Email: </label>
        <input
          type="email"
          placeholder="mo.e@northeastern.edu"
          id="wd-school-email"
        />
        <br />
        <label htmlFor="wd-expected-graduation">
          Expected Year of Graduation:{" "}
        </label>
        <input
          type="number"
          defaultValue="2027"
          placeholder="2027"
          min={2026}
          max={2036}
          id="wd-expected-graduation"
        />
        <br />
        <label htmlFor="wd-dob">Date of birth: </label>
        <input
          type="date"
          defaultValue="2003-12-24"
          min="1900-01-01"
          max="2025-12-31"
          id="wd-dob"
        />
        <br />
        <label htmlFor="wd-excitement-level">
          How excited you are for this course:{" "}
        </label>
        <input
          type="range"
          defaultValue="5"
          min="0"
          max="10"
          id="wd-excitement-level"
        />
        <br />
        <br />
        <button id="wd-button-save" type="submit">
          Save
        </button>
        <button id="wd-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
