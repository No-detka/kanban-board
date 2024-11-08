const LIST_TYPES = {
	BACKLOG: 'backlog',
    READY: 'ready',
	IN_PROGRESS: 'inProgress',
	FINISHED: 'finished',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}

const LIST_COLORS = {
	[LIST_TYPES.Backlog]: '#FFFFFF',
	[LIST_TYPES.Ready]: '#FFFFFF',
	[LIST_TYPES.InProgress]: '#FFFFFF',
	[LIST_TYPES.Finished]: '#FFFFFF'
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }