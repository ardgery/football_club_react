export default function BackButton({ title }) {
    function goBack() {
        window.history.back();
    }
    return <button onClick={() => goBack()}>&#60;&#8211; Back to {title}</button>
}
