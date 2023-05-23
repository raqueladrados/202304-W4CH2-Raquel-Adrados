import { PersonalData } from "../../models/personal.data";
export function Home() {
  return (
    <>
      <section>
        <form>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" />
          <label htmlFor="lastname"></label>
          <input type="text" name="lastname" id="lastname" />
          <label htmlFor="birthday"></label>
          <input type="date" id="birthday" name="birthday" value="" />
          <fieldset>
            <legend></legend>
            <input type="radio" id="" name="gender" />
          </fieldset>
        </form>
      </section>
    </>
  );
}
