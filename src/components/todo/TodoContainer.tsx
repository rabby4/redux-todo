/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "@/redux/hook"
import { useState } from "react"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"
import { useGetTodosQuery } from "@/redux/api/api"

const TodoContainer = () => {
	const [priority, setPriority] = useState("")
	// From local state
	// const { todos } = useAppSelector((state) => state.todos)

	// From server
	const { data: todos, isLoading, isError } = useGetTodosQuery(priority)

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Error found</p>

	return (
		<div>
			<div className="flex justify-between mb-5">
				<AddTodoModal />
				<TodoFilter priority={priority} setPriority={setPriority} />
			</div>
			<div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
				{/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
					<p>There is no task pending</p>
				</div> */}
				<div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
					{todos?.data?.map((item: any) => (
						<TodoCard {...item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default TodoContainer
