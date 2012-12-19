(function (root) {

function isValidRange(position) {
	return (position < 0 && (listSize > 0 && position >= listSize));
}

function isEmpty(valToCheck) {
	return (valToCheck === null || typeof valToCheck == 'undefined');
}

function ListNode() {
	this.data = null;
	this.nextNode = null;
}

function LinkedList() {

	var headNode = null;
	var listSize = 0;
	var positionError = "You have entered an invalid position, it must be between 1 and " + listSize + ".";

	this.size = function () {
		return listSize;
	};

	this.empty = function () {

		listSize = 0;
		return (headNode = null);

	};

	this.get = function (position) {

		var currentNode = this.seek(position || 1);
		return currentNode.data;

	};

	this.insert = function (item, position) {

		var lastNode, currentNode, previousNode;
		var node = new ListNode();

		node.data = item;

		if (position === 1 || listSize === 0) {

			node.nextNode = headNode;
			headNode = node;

		} else if (isEmpty(position)) {

			lastNode = this.seek(listSize);
			lastNode.nextNode = node;

		} else {

			previousNode = this.seek(position - 1);
			node.nextNode = previousNode.nextNode;
			previousNode.nextNode = node;

		}
		listSize++;
		return true;

	};

	this.remove = function (position) {

		if (!isValidRange) throw new Error(positionError);

		var currentNode = this.seek(position);
		var nextNode = currentNode.nextNode;
		var previousNode;

		if (position === 1) {

		  headNode = nextNode;

		} else {

			previousNode = this.seek(position-1);
			previousNode.nextNode = nextNode;

		}
		listSize--;
		return true;

	};

	this.replace = function (data, position) {

		var currentNode = this.seek(position || 1);
		currentNode.data = data;

	};

	this.seek = function (position) {

		if (!isValidRange) throw new Error(positionError);

		var currentPosition = 1;
		var currentNode = headNode;

		if (position <= 0 || position > listSize) {
			return null;
		}

		while (currentPosition < position) {
			currentNode = currentNode.nextNode;
			currentPosition++;
		}

		return currentNode;

	};

}

if (typeof module !== "undefined" && module !== null && module.exports != null) {
	module.exports = LinkedList;
} else {
	root.LinkedList = LinkedList;
}

}(this));