import { useState } from "react";
import { hashFile, readFileToType } from "../scripts/hash";

export default () => {
    const [ result, setResult ] = useState('')

    const readFile = () => {
        readFileToType('ArrayBuffer')
            .then(res => {
                const hashResult = hashFile(res, 'Md5')
                console.log(hashResult)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            TestView
            <button onClick={ () => {
                readFile()
            } }>select</button>
        </div>
    )
}