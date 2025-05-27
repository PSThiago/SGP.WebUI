import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
    IconButton,
    Paper,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import type { Processo } from "../types/Processo";


type ProcessoTableProps = {
    processos: Processo[];
    onEdit?: (processo: Processo) => void;
    onDelete?: (id: string) => void;
};

const ProcessoTable: React.FC<ProcessoTableProps> = ({ processos, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Responsável</TableCell>
                        <TableCell>Prioridade</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Porcentagem</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {processos.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell>{p.nome}</TableCell>
                            <TableCell>{p.responsavel}</TableCell>
                            <TableCell>{p.prioridade}</TableCell>
                            <TableCell>{p.status}</TableCell>
                            <TableCell>{p.porcentagem}%</TableCell>
                            <TableCell>
                                <IconButton color="primary" onClick={() => onEdit?.(p)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error" onClick={() => onDelete?.(p.id!)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProcessoTable;
