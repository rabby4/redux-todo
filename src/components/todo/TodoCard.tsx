import Trash from "@/assets/icons/Trash"
import { Button } from "../ui/button"
import PenSquare from "@/assets/icons/PenSquare"
import { useAppDispatch } from "@/redux/hook"
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice"

type TTodoCardProps = {
	id: string
	title: string
	description: string
	isCompleted?: boolean
}

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
	const dispatch = useAppDispatch()

	const toggleState = () => {
		dispatch(toggleComplete(id))
	}

	return (
		<div>
			<div className="bg-white rounded-md flex justify-between items-center p-3 border">
				<input
					onChange={toggleState}
					type="checkbox"
					name="complete"
					id="complete"
				/>
				<p className="font-semibold">{title}</p>
				{/* <p>Time</p> */}
				<div>
					{isCompleted ? (
						<p className="text-green-500">Done</p>
					) : (
						<p className="text-red-500">Pending</p>
					)}
				</div>
				<p>{description}</p>
				<div className="space-x-5">
					<Button
						onClick={() => dispatch(removeTodo(id))}
						className="bg-red-500"
					>
						<Trash />
					</Button>
					<Button className="bg-[#5c53fe]">
						<PenSquare />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default TodoCard
