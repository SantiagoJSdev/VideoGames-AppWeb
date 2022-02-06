import { types } from "../types/types"

export const errorCreateGame = (data) => {

    return {
        type: types.ERRORCREATEGAME,
        payload: data
    }
}