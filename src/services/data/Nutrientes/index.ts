import api from "../../api"
import { INutri, INutriField } from "../../../interfaces/Nutrientes.interface"

class NutriData {
    create(data: INutriField) {
        return api.post<INutri>('/nutrientes', data)
    }
}

export default new NutriData()