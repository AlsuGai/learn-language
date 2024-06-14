import './CreateWordTable.scss';

export default function CreateWordTable({word}) {

    const {id, english, transcription, russian, saveWord} = word;
    let actionItem;
    function EditWord() {
            return (
                <button><img src="./src/assets/images/edit.png" alt="Редактировать"></img></button>
            )
        }

        function SaveWord() {
            return (
                <button><img src="./src/assets/images/save.png" alt="Сохранить"></img></button>
            )
        }
    if(saveWord) {
        actionItem = <SaveWord/>
    } else {
        actionItem = <EditWord />
    }

    return (
            <tr className="word">
                <td>{english}</td>
                <td>{transcription}</td>
                <td>{russian}</td>
                <td className="table-icons">
                {actionItem}
                <button><img src="./src/assets/images/delete.png" alt="Редактировать"></img></button>
                <button><img src="./src/assets/images/sound.png" alt="Редактировать"></img></button>
                </td>
            </tr>
    )
}