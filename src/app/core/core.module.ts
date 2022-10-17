import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
