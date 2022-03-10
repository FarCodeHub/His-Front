import { Component, OnInit, ViewChild } from '@angular/core';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { DrugModel } from 'src/app/models/drug-model';
import { PatientModel } from 'src/app/models/patient-model';
import { PrescriptionModel } from 'src/app/models/prescription-model';
import { ReceptionModel } from 'src/app/models/reception-model';

@Component({
  selector: 'app-profile-visit-list',
  templateUrl: './profile-visit-list.component.html',
  styleUrls: ['./profile-visit-list.component.scss']
})
export class ProfileVisitListComponent implements OnInit {

  visits!: PrescriptionModel[];
  patient: PatientModel;
  dataColumns: GridColumn[] = [
    { title: "Date & Time", field: "prescriptionDate", filterable: true, sortable: true, ascending: true },
    { title: "Doctor Name", field: "doctorTitle", filterable: true, sortable: true, ascending: true },
    { title: "Center Title", field: "medicalCenterTitle", filterable: true, sortable: false, ascending: true },
  ];

  prescription : PrescriptionModel;
  prescriptionDrugs : DrugModel[] = [];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Drug Detail",
    size: 'xl',
    centered: true,
    footer: false,
    header: true,
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }



  constructor(private dataService: DataService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.patient = this.auth.loadCurrentPatient();

    this.dataService.getDataByParam("patientId", this.patient.id, "Patient", "GetPatientPrescriptionsBy").subscribe((result) => {
      this.visits = result.data;
    })
  }

  sort(column) {

  }

  onVisitClick(visit: PrescriptionModel) {
   this.prescription = visit;
   for(let item of this.prescription.drugs)
   if (item != null)
   this.prescriptionDrugs.push(item);
   return this.modal.open()
  }
}
