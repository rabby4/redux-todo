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
	priority: string
}

const TodoCard = ({
	title,
	description,
	id,
	isCompleted,
	priority,
}: TTodoCardProps) => {
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
					className="mr-3"
				/>
				<p className="font-semibold flex-1">{title}</p>
				<div className="flex-1 flex items-center gap-2">
					<div
						className={`size-3 rounded-full 
							${priority === "high" ? "bg-red-500" : null} 
							${priority === "medium" ? "bg-yellow-500" : null}
							${priority === "low" ? "bg-green-500" : null}
							`}
					></div>
					<p>{priority}</p>
				</div>
				<div className="flex-1">
					{isCompleted ? (
						<p className="text-green-500">Done</p>
					) : (
						<p className="text-red-500">Pending</p>
					)}
				</div>
				<p className="flex-[2]">{description}</p>
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
