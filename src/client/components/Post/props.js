import { number, string } from "prop-types"

export const propTypes = {
  id: number.isRequired,
  userId: number.isRequired,
  title: string.isRequired,
  body: string.isRequired
}
