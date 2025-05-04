
const Feedback = ({ good, bad, neutral }) => {
    return (
    <div>
        <p>Good:{good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
    )
}
export default Feedback;