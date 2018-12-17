import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationUserDetailsModule } from './user-details/user-details.module';
import { JhipsterSampleApplicationMoneyAccountModule } from './money-account/money-account.module';
import { JhipsterSampleApplicationTransactionModule } from './transaction/transaction.module';
import { JhipsterSampleApplicationBudgetModule } from './budget/budget.module';
import { JhipsterSampleApplicationBudgetItemModule } from './budget-item/budget-item.module';
import { JhipsterSampleApplicationBillsModule } from './bills/bills.module';
import { JhipsterSampleApplicationBillItemModule } from './bill-item/bill-item.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationUserDetailsModule,
        JhipsterSampleApplicationMoneyAccountModule,
        JhipsterSampleApplicationTransactionModule,
        JhipsterSampleApplicationBudgetModule,
        JhipsterSampleApplicationBudgetItemModule,
        JhipsterSampleApplicationBillsModule,
        JhipsterSampleApplicationBillItemModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
