import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProcessoForm from "../components/ProcessoForm";
import { getProcesso } from "../services/api";
import { type Processo } from "../types/Processo";

export default function ProcessoEditor() {
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState<Processo | undefined>();

    useEffect(() => {
        if (id) {
            getProcesso(id).then(res => setInitialValues(res.data));
        }
    }, [id]);

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: "0.25rem",
            color: '#242424',
            width: "600px"
        }}>
            <ProcessoForm initialValues={initialValues} id={id} />
        </div>
    );
}
