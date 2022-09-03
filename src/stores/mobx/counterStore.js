import { makeAutoObservable } from "mobx";

class CounterStore {
  parentCount = 0
  childCount = 0

  constructor() {
    makeAutoObservable(this)
  }

  incrementParentCount = () => {
    this.parentCount = this.parentCount + 1
  }

  incrementChildCount = () => {
    this.childCount = this.childCount + 1
  }
}

export const counterStore = new CounterStore()