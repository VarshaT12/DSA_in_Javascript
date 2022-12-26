class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        // this.size = 0;
    }

    // node is added at first
    addFirst(element) {
        // let temp;
        let newNode = new ListNode(element);
        if (newList.head == null) {
            this.head = newNode;
            return result;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            return newList;
        }
    };

    // node is added at last 
    addLast(element) {
        let temp;
        let newNode = new ListNode(element);
        if (this.head == null) {
            this.head = newNode;
        } else {
            temp = this.head;
            while (temp.next) {
                temp = temp.next;
            };
            temp.next = newNode;
        }
        return newList;
    }

    //insert value at the given position
    insertAt(value, location) {
        let currTemp, preTemp, count = 0;
        let newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            currTemp = this.head;
            while (count < location - 1) {
                count++;
                currTemp = currTemp.next;
            }
            preTemp = currTemp;
            currTemp = currTemp.next;
            preTemp.next = newNode;
            newNode.next = currTemp;
        }
        return newList;
    }

    //remove first element
    removeFirst() {
        let temp;
        if (this.head == null) {
            return "LinkedList is empty"
        } else {
            temp = this.head;
            this.head = temp.next
        }
        return newList;
    }

    //remove last element
    removeLast() {
        let temp, secondLast;
        if (this.head == null) {
            return "LinkedList is empty"
        } else {
            temp = this.head;

            while (temp.next != null) {
                secondLast = temp;
                temp = temp.next;
            };
            secondLast.next = temp.next;
        }
        return newList;
    }

    //remove any element
    removeElement(value) {
        let currTemp, preTemp, count = 0;
        if (this.head == null) {
            return "LinkedList is empty"
        } else {
            currTemp = this.head;
            while (currTemp.value != value) {
                preTemp = currTemp;
                currTemp = currTemp.next;
            };
            preTemp.next = currTemp.next;

        }
        return newList;
    }

}



let node1 = new ListNode(6);
let node2 = new ListNode(10);
let node3 = new ListNode(15);
let node4 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
let newList = new LinkedList(node1);

const result = newList.addLast(7);
const ans = newList.addFirst(4);
const insertedVal = newList.insertAt(12, 3);
const delFirst = newList.removeFirst();
const delLast = newList.removeLast();
const delElem = newList.removeElement(15)
// console.log(result);
// console.log(ans);
console.log(insertedVal);
console.log(delFirst);




