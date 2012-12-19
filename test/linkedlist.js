describe('Linked List', function () {

	var list;

	beforeEach(function () {
		list = new LinkedList();
	});

	describe('#insert()', function () {

		it("LinkedList should have an item in it", function () {
			list.insert('Primary User');
			expect(list.size()).to.equal(1);
		});

		it("LinkedList#insert(2) should insert at position 2", function () {
			list.insert('Primary User');
			list.insert('End User');
			list.insert('Secondary User', 2);
			expect(list.seek(2)).to.deep.equal({ data: 'Secondary User', nextNode: { data: 'End User', nextNode: null } });
		});

		it("LinkedList#insert(1) should insert at position 1", function () {
			list.insert('Secondary User');
			list.insert('End User');
			list.insert('Primary User', 1);
			expect(list.seek(1)).to.deep.equal({ data: 'Primary User', nextNode: { data: 'Secondary User', nextNode: { data: 'End User', nextNode: null } } });
		});

	});

	describe('#size()', function () {

		it("LinkedList#size() to be 3", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.insert('End User');
			expect(list.size()).to.equal(3);
		});

	});

	describe('#seek()', function () {

		it("LinkedList be an object", function () {
			list.insert('Primary User');
			expect(list.seek()).to.be.an('object');
		});

		it("LinkedList#seek(1) equal { data: 'Primary User', nextNode: null }", function () {
			list.insert('Primary User');
			expect(list.seek()).to.deep.equal({ data: 'Primary User', nextNode: null });
			expect(list.seek(1)).to.deep.equal({ data: 'Primary User', nextNode: null });
		});

		it("LinkedList#seek(2) equal { data: 'Secondary User', nextNode: null }", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			expect(list.seek(2)).to.deep.equal({ data: 'Secondary User', nextNode: null });
		});

		it("LinkedList#seek(3) equal { data: 'End User', nextNode: null }", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.insert('End User');
			expect(list.seek(3)).to.deep.equal({ data: 'End User', nextNode: null });
		});

	});

	describe('#empty()', function () {

		it("LinkedList#empty() should remove all of the items", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.insert('End User');
			list.empty();
			expect(list.size()).to.equal(0);
		});

	});

	describe('#get()', function () {


		it("LinkedList#get(1) equal 'Primary User'", function () {
			list.insert('Primary User');
			expect(list.get()).to.equal('Primary User');
			expect(list.get(1)).to.equal('Primary User');
		});

		it("LinkedList#get(2) equal 'Secondary User'", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			expect(list.get(2)).to.equal('Secondary User');
		});

		it("LinkedList#get(3) equal 'End User'", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.insert('End User');
			expect(list.get(3)).to.deep.equal('End User');
		});

	});

	describe('#remove()', function () {

		it("LinkedList#remove(1) should empty the LinkedList", function () {
			list.insert('Primary User');
			list.remove(1);
			expect(list.seek()).to.null;
		});

		it("LinkedList#remove(2) should remove the last element", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.remove(2);
			expect(list.seek()).to.deep.equal({ data: 'Primary User', nextNode: null });
		});

		it("LinkedList#remove(2) should remove the middle element", function () {
			list.insert('Primary User');
			list.insert('Secondary User');
			list.insert('End User');
			list.remove(2)
			expect(list.seek()).to.deep.equal({ data: 'Primary User', nextNode: { data: 'End User', nextNode: null } });
		});

	});

	describe('#replace()', function () {

		it("LinkedList#replace('Primary User', 1) should replace the first element", function () {
			list.insert('Old Person');
			list.insert('Secondary User');
			list.insert('End User');
			list.replace('Primary User', 1);
			expect(list.get(1)).to.equal('Primary User');
		});

		it("LinkedList#replace('Secondary User', 2) should replace the last data", function () {
			list.insert('Primary User');
			list.insert('End User');
			list.replace('Secondary User', 2);
			expect(list.get(2)).to.equal('Secondary User');
		});

		it("LinkedList#replace('Secondary User', 2) should replace the middle element", function () {
			list.insert('Primary User');
			list.insert('Tertiary User');
			list.insert('End User');
			list.replace('Secondary User', 2);
			expect(list.get(2)).to.equal('Secondary User');
		});

	});

});