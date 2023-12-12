import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxContextMenuComponent, DxTextBoxComponent } from 'devextreme-angular';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  @ViewChild(DxTextBoxComponent, { static: false }) inputComponent!: DxTextBoxComponent;
  @ViewChild(DxContextMenuComponent, { static: false }) contextMenuComponent!: DxContextMenuComponent;
  @ViewChild('inputRef', { static: false }) inputRef!: ElementRef<HTMLInputElement>;
  items:any;
  empForm: FormGroup ;
  dropDownOptions:any
  inputValue: string = '';
  showEditPopUp: boolean=false;
  currentInputElement: HTMLInputElement | null = null;
  popupData:any;
  test=[{id:1,name:123456},{id:2,name:123456},{id:3,name:123456},{id:4,name:123456},{id:5,name:123456},,{id:6,name:123456}]

  get employees() {
    return this.empForm.get('employees') as FormArray;
  }

  constructor(private fb: FormBuilder,) {
    this.empForm=this.fb.group({
      employees: this.fb.array([]) ,
    })
    this.dropDownOptions = {
      maxHeight: 500,
      onShown(e: any) {
        e.component.option({
          container: e.element,
          hideOnParentScroll: true,
        });
      },
    };
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills:this.fb.array([])
    })
  }

  OnInit(): void {
    throw new Error('Method not implemented.');
  }
  // related form
  addEmployee() {
    this.employees.push(this.newEmployee());
  }
 
  removeEmployee(empIndex: number) {
    this.employees.removeAt(empIndex);
  }
 
  employeeSkills(empIndex: number): FormArray {
    return this.employees
      .at(empIndex)
      .get('skills') as FormArray;
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }
 
  addEmployeeSkill(empIndex: number) {
    console.log(empIndex)
    this.employeeSkills(empIndex).push(this.newSkill());
  }
 
  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }
 
  onSubmit() {
    console.log(this.empForm.value);
  }


  openPopup(robotIndex: number) {
    this.popupData =
      this.employees.at(robotIndex).value;
    this.showEditPopUp = true;
  }
 
}
