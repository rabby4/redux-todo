import Trash from "@/assets/icons/Trash"
import { Button } from "../ui/button"
import PenSquare from "@/assets/icons/PenSquare"

const TodoCard = () => {
	return (
		<div>
			<div className="bg-white rounded-md flex justify-between items-center p-3 border">
				<input type="checkbox" name="" id="" />
				<p className="font-semibold">Todo Title</p>
				<p>Time</p>
				<p>Description</p>
				<div className="space-x-5">
					<Button className="bg-red-500">
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
