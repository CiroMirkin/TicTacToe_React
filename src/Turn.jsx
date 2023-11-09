import { TURNS } from "./constants"
import { Cell } from "./Cell"

export function Turn({ actualTurn }) {
    return (
        <section className="turn">
            <Cell isSelected={actualTurn === TURNS.X}>
                {TURNS.X}
            </Cell>
            <Cell isSelected={actualTurn === TURNS.O}>
                {TURNS.O}
            </Cell>
        </section>
    )
}