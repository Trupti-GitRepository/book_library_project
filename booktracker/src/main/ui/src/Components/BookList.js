import BookCard from "./BookCard"

const BookList = () => {
  return (
    <section className="md:container md:mx-auto mx-auto">
        <div className="grid gap-6 mt-10">
            <BookCard />
        </div>
    </section>
  )
}

export default BookList