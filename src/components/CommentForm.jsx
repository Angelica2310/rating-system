export default function CommentForm() {
  return (
    <div>
      <form>
        <h2>This is a form page</h2>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="comment">Comment</label>
        <input id="comment" name="comment" type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
