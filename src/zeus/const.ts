/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		createTask:{

		},
		updateTaskBody:{

		},
		updateTaskStatus:{

		}
	},
	Query:{
		allTasks:{

		},
		getTask:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		createTask:"Task",
		updateTaskBody:"Task",
		updateTaskStatus:"Task"
	},
	Query:{
		allTasks:"TaskConnection",
		getTask:"Task"
	},
	Task:{
		description:"String",
		id:"ID",
		owner:"String",
		taskStatus:"String",
		title:"String"
	},
	TaskConnection:{
		items:"Task",
		nextToken:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}