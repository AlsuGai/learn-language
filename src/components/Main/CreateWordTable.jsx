export default function CreateWordTable({word}) {

    const {id, english, transcription, russian} = word;

    return (
            <div>
                   <div>{english}</div>
                   <div>{transcription}</div>
                   <div>{russian}</div>
            </div>
    )
}