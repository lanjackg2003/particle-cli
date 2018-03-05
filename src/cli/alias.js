export default ({ commandProcessor, root }) => {
	function alias(category, aliasName, path) {
		const cmd = root.find(path);
		if (cmd) {
			commandProcessor.createCommand(category, aliasName, cmd.description, cmd.options);
		}
	}

	alias(root, 'login', ['cloud', 'login']);
	alias(root, 'logout', ['cloud', 'logout']);
	alias(root, 'list', ['cloud', 'list']);
	alias(root, 'nyan', ['cloud', 'nyan']);
	alias(root, 'call', ['function', 'call']);
	alias(root, 'get', ['variable', 'get']);
	alias(root, 'monitor', ['variable', 'monitor']);

	alias(root, 'compile', ['cloud', 'compile']);

	const device = commandProcessor.createCategory(root, 'device', 'Commands to manipulate a device');
	alias(device, 'add', ['cloud', 'claim']);
	alias(device, 'remove', ['cloud', 'remove']);
	alias(device, 'rename', ['cloud', 'name']);
	alias(device, 'doctor', ['doctor']);

	const core = commandProcessor.createCategory(root, 'core', false);
	alias(core, 'add', ['cloud', 'claim']);
	alias(core, 'remove', ['cloud', 'remove']);
	alias(core, 'rename', ['cloud', 'name']);
};
