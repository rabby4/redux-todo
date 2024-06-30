import { Button } from "../ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const TodoFilter = ({ priority, setPriority }) => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="bg-primary-gradient text-xl font-semibold">
						Filter
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
						<DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default TodoFilter
