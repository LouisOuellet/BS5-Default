<!-- ======= Settings ======= -->
<div class="col-12" id="layout"></div>
<script src="/js/sampleData.js"></script>
<script src="/js/settings.js"></script>
<script>
    $(document).ready(function () {
        const Layout = new layoutSettings($('#layout'));
        console.log(Layout);

        Layout
            .add({label:'General',icon:'gear'},function(category,layout){
                category.add({label:'About',icon:'journal-richtext',body:true,form:false},function(item,content){
                    var logo = $(document.createElement('div')).addClass('d-flex flex-column justify-content-center align-items-center').appendTo(content.body);
                    logo.icon = $(document.createElement('i')).css({'font-size':'200px'}).addClass('bi bi-bootstrap-fill').appendTo(logo);
                    logo.brand = $(document.createElement('h1')).text('Panel').appendTo(logo);
                    var badges = $(document.createElement('div')).addClass('d-flex flex-wrap justify-content-center align-items-center').appendTo(content.body);
                    for(const [key, version] of Object.entries(sampleVersions)){
                        var badge = $(document.createElement('div')).addClass('badge bg-dark p-0 fs-4 m-1').appendTo(badges);
                        badge.label = $(document.createElement('span')).addClass('badge text-bg-' + version.color).text(version.label).appendTo(badge);
                        badge.label.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + version.icon).prependTo(badge.label);
                        badge.version = $(document.createElement('span')).addClass('badge').text(version.version).appendTo(badge);
                        badges[version.name] = badge;
                    }
                });
                category.add({label:'Updates',icon:'arrow-repeat',body:true,form:false},function(item,content){});
                category.add({label:'Identity',icon:'sliders'},function(item,content){
                    content.form.add({name: 'brand',label: 'Brand',icon: 'app-indicator',value: 'Panel'},function(field){});
                    content.form.add({name: 'logo',label: 'Logo',icon: 'image',type: 'file',value: null},function(field){});
                    content.form.add({name: 'theme',label: 'Theme',icon: 'palette',type: 'select',value: 'glass',options: [{id:'glass',text:'Glass'}]},function(field){});
                });
                category.add({label:'Database',icon:'database'},function(item,content){
                    content.form.add({name: 'host',label: 'Host',icon: 'hdd-network',value: 'localhost'},function(field){});
                    content.form.add({name: 'database',label: 'Database',icon: 'database',value: 'demo'},function(field){});
                    content.form.add({name: 'username',label: 'Username',icon: 'person',value: 'demo'},function(field){});
                    content.form.add({name: 'password',label: 'Password',icon: 'lock',type: 'password',value: 'demo'},function(field){});
                });
                category.add({label:'SMTP',icon:'send'},function(item,content){
                    content.form.add({name: 'host',label: 'Host',icon: 'hdd-network',value: 'localhost'},function(field){});
                    content.form.add({name: 'port',label: 'Port',icon: 'ethernet',type: 'number',value: 465},function(field){});
                    content.form.add({name: 'encryption',label: 'Encryption',icon: 'shield',type: 'select',value: 'ssl',options: [
                        {id:'ssl',text:'SSL'},
                        {id:'tls',text:'TLS'},
                        {id:'none',text:'None'},
                    ]},function(field){});
                    content.form.add({name: 'username',label: 'Username',icon: 'person',value: 'demo@domain.com'},function(field){});
                    content.form.add({name: 'password',label: 'Password',icon: 'lock',type: 'password',value: 'demo'},function(field){});
                });
                category.add({label:'SMS',icon:'chat-square-text'},function(item,content){
                    content.form.add({name: 'provider',label: 'Provider',icon: 'reception-4',type: 'select',value: 'twilio',options: [{id:'twilio',text:'Twilio'}]},function(field){});
                    content.form.add({name: 'sid',label: 'SID',value: 'ABCDEF1234567890'},function(field){});
                    content.form.add({name: 'token',label: 'Token',value: 'ABCDEF1234567890'},function(field){});
                    content.form.add({name: 'phone',label: 'Phone',icon: 'phone',value: '+01234567890'},function(field){});
                });
            })
            .add({label:'Security',icon:'shield-lock'},function(category,layout){
                category.add({label:'Groups',icon:'people',body:true,form:false},function(item,content){});
                category.add({label:'Users',icon:'person',body:true,form:false},function(item,content){
                    content.body.addClass('p-0');
                    var table = new Table(
                        content.body,
                        {
                            class: {
                                buttons: 'px-4 pt-4',
                                table: 'border-top',
                                footer: 'px-4 pt-2 pb-4',
                            },
                            showButtonsLabel: false,
                            columnsVisibility: false,
                            selectTools:false,
                            actions:{
                                remove:{
                                    label:'Remove',
                                    icon:'trash',
                                    action:function(event, table, node, row, data){
                                        table.delete(row);
                                    },
                                },
                            },
                            datatable:{
                                columnDefs:[
                                    { target: 0, visible: false, responsivePriority: 1, title: 'ID', name: 'id', data: 'id' },
                                    { target: 1, visible: false, responsivePriority: 2, title: 'Created', name: 'created', data: 'created' },
                                    { target: 2, visible: false, responsivePriority: 3, title: 'Modified', name: 'modified', data: 'modified' },
                                    { target: 3, visible: false, responsivePriority: 4, title: 'Owner', name: 'owner', data: 'owner' },
                                    { target: 4, visible: false, responsivePriority: 5, title: 'Updated By', name: 'updatedBy', data: 'updatedBy' },
                                    { target: 5, visible: true, responsivePriority: 6, title: 'Username', name: 'username', data: 'username' },
                                    { target: 6, visible: false, responsivePriority: 7, title: 'Password Salt', name: 'passwordSalt', data: 'passwordSalt' },
                                    { target: 7, visible: false, responsivePriority: 8, title: 'Password Hash', name: 'passwordHash', data: 'passwordHash' },
                                    { target: 8, visible: false, responsivePriority: 9, title: '2FA Salt', name: '2FASalt', data: '2FASalt' },
                                    { target: 9, visible: false, responsivePriority: 10, title: '2FA Hash', name: '2FAHash', data: '2FAHash' },
                                    { target: 10, visible: false, responsivePriority: 11, title: 'Last 2FA', name: 'last2FA', data: 'last2FA' },
                                    { target: 11, visible: false, responsivePriority: 12, title: '2FA Method', name: '2FAMethod', data: '2FAMethod' },
                                    { target: 12, visible: false, responsivePriority: 13, title: 'Bearer Token', name: 'bearerToken', data: 'bearerToken' },
                                    { target: 13, visible: true, responsivePriority: 14, title: 'Name', name: 'name', data: 'name' },
                                    { target: 14, visible: false, responsivePriority: 15, title: 'Address', name: 'address', data: 'address' },
                                    { target: 15, visible: false, responsivePriority: 16, title: 'City', name: 'city', data: 'city' },
                                    { target: 16, visible: false, responsivePriority: 17, title: 'State', name: 'state', data: 'state' },
                                    { target: 17, visible: false, responsivePriority: 18, title: 'Country', name: 'country', data: 'country' },
                                    { target: 18, visible: false, responsivePriority: 19, title: 'Zipcode', name: 'zipcode', data: 'zipcode' },
                                    { target: 19, visible: false, responsivePriority: 20, title: 'Phone', name: 'phone', data: 'phone' },
                                    { target: 20, visible: false, responsivePriority: 21, title: 'Mobile', name: 'mobile', data: 'mobile' },
                                    { target: 21, visible: true, responsivePriority: 22, title: 'Status', name: 'status', data: 'status' },
                                    { target: 22, visible: true, responsivePriority: 23, title: 'Database', name: 'database', data: 'database' },
                                    { target: 23, visible: false, responsivePriority: 24, title: 'Server', name: 'server', data: 'server' },
                                    { target: 24, visible: false, responsivePriority: 25, title: 'Domain', name: 'domain', data: 'domain' },
                                    { target: 25, visible: false, responsivePriority: 26, title: 'Session ID', name: 'sessionId', data: 'sessionId' },
                                    { target: 26, visible: false, responsivePriority: 27, title: 'Attempts', name: 'attempts', data: 'attempts' },
                                    { target: 27, visible: false, responsivePriority: 28, title: 'Last Attempt', name: 'lastAttempt', data: 'lastAttempt' },
                                    { target: 28, visible: false, responsivePriority: 29, title: 'Requests', name: 'requests', data: 'requests' },
                                    { target: 29, visible: false, responsivePriority: 30, title: 'Last Request', name: 'lastRequest', data: 'lastRequest' },
                                    { target: 30, visible: true, responsivePriority: 31, title: 'Active', name: 'isActive', data: 'isActive' },
                                    { target: 31, visible: false, responsivePriority: 32, title: 'Verified', name: 'isVerified', data: 'isVerified' },
                                    { target: 32, visible: false, responsivePriority: 33, title: 'Verified Salt', name: 'verifiedSalt', data: 'verifiedSalt' },
                                    { target: 33, visible: false, responsivePriority: 34, title: 'Verified Hash', name: 'verifiedHash', data: 'verifiedHash' },
                                    { target: 34, visible: false, responsivePriority: 35, title: 'Verified On', name: 'verifiedOn', data: 'verifiedOn' },
                                    { target: 35, visible: false, responsivePriority: 36, title: 'Verified Until', name: 'verifiedUntil', data: 'verifiedUntil' },
                                    { target: 36, visible: false, responsivePriority: 37, title: 'Banned', name: 'isBanned', data: 'isBanned' },
                                    { target: 37, visible: false, responsivePriority: 38, title: 'Deleted', name: 'isDeleted', data: 'isDeleted' },
                                    { target: 38, visible: true, responsivePriority: 39, title: 'API', name: 'isAPI', data: 'isAPI' },
                                    { target: 39, visible: false, responsivePriority: 40, title: 'Contact Info Dynamic', name: 'isContactInfoDynamic', data: 'isContactInfoDynamic' },
                                ],
                                buttons:[
                                    {
                                        text: '<i class="bi-plus-lg"></i>',
                                        action:function(e, dt, node, config){
                                            console.log(e, dt, node, config);
                                        },
                                    }
                                ],
                            },
                        },
                        function(table){
                            for(const [key, user] of Object.entries(sampleUsers)){
                                table.add(user);
                            }
                        }, 
                    );
                });
                category.add({label:'Roles',icon:'shield',body:true,form:false},function(item,content){});
                category.add({label:'Permissions',icon:'lock',body:true,form:false},function(item,content){});
            })
            .add({label:'Maintenance',icon:'tools'},function(category,layout){
                category.add({label:'Organizations',icon:'buildings',body:true,form:false},function(item,content){
                    content.body.addClass('p-0');
                    var table = new Table(
                        content.body,
                        {
                            class: {
                                buttons: 'px-4 pt-4',
                                table: 'border-top',
                                footer: 'px-4 pt-2 pb-4',
                            },
                            showButtonsLabel: false,
                            columnsVisibility: false,
                            selectTools:false,
                            actions:{
                                remove:{
                                    label:'Remove',
                                    icon:'trash',
                                    action:function(event, table, node, row, data){
                                        table.delete(row);
                                    },
                                },
                            },
                            datatable:{
                                columnDefs:[
                                    { target: 0, visible: false, responsivePriority: 1, title: 'ID', name: 'id', data: 'id' },
                                    { target: 1, visible: false, responsivePriority: 2, title: 'Created', name: 'created', data: 'created' },
                                    { target: 2, visible: false, responsivePriority: 3, title: 'Modified', name: 'modified', data: 'modified' },
                                    { target: 3, visible: false, responsivePriority: 4, title: 'Owner', name: 'owner', data: 'owner' },
                                    { target: 4, visible: false, responsivePriority: 5, title: 'Updated By', name: 'updatedBy', data: 'updatedBy' },
                                    { target: 5, visible: true, responsivePriority: 6, title: 'Name', name: 'name', data: 'name' },
                                    { target: 6, visible: false, responsivePriority: 7, title: 'SBNR/EIN', name: 'sbnr/ein', data: 'sbnr/ein' },
                                    { target: 7, visible: false, responsivePriority: 8, title: 'Address', name: 'address', data: 'address' },
                                    { target: 8, visible: false, responsivePriority: 9, title: 'City', name: 'city', data: 'city' },
                                    { target: 9, visible: false, responsivePriority: 10, title: 'State', name: 'state', data: 'state' },
                                    { target: 10, visible: false, responsivePriority: 11, title: 'Country', name: 'country', data: 'country' },
                                    { target: 11, visible: false, responsivePriority: 12, title: 'Zipcode', name: 'zipcode', data: 'zipcode' },
                                    { target: 12, visible: false, responsivePriority: 13, title: 'Email', name: 'email', data: 'email' },
                                    { target: 13, visible: false, responsivePriority: 14, title: 'Fax', name: 'fax', data: 'fax' },
                                    { target: 14, visible: false, responsivePriority: 15, title: 'Phone', name: 'phone', data: 'phone' },
                                    { target: 15, visible: false, responsivePriority: 16, title: 'Toll Free', name: 'tollfree', data: 'tollfree' },
                                    { target: 16, visible: false, responsivePriority: 17, title: 'Website', name: 'website', data: 'website' },
                                    { target: 17, visible: false, responsivePriority: 18, title: 'Domain', name: 'domain', data: 'domain' },
                                    { target: 18, visible: false, responsivePriority: 19, title: 'Database', name: 'database', data: 'database' },
                                    { target: 19, visible: false, responsivePriority: 20, title: 'Server', name: 'server', data: 'server' },
                                    { target: 20, visible: false, responsivePriority: 21, title: 'Subsidiary', name: 'isSubsidiary', data: 'isSubsidiary' },
                                    { target: 21, visible: false, responsivePriority: 22, title: 'Deleted', name: 'isDeleted', data: 'isDeleted' },
                                    { target: 22, visible: true, responsivePriority: 23, title: 'Active', name: 'isActive', data: 'isActive' },
                                ],
                                buttons:[
                                    {
                                        text: '<i class="bi-plus-lg"></i>',
                                        action:function(e, dt, node, config){
                                            console.log(e, dt, node, config);
                                        },
                                    }
                                ],
                            },
                        },
                        function(table){
                            for(const [key, organization] of Object.entries(sampleOrganizations)){
                                table.add(organization);
                            }
                        }, 
                    );
                });
                category.add({label:'Divisions',icon:'diagram-2',body:true,form:false},function(item,content){});
                category.add({label:'Offices',icon:'briefcase',body:true,form:false},function(item,content){});
                category.add({label:'Teams',icon:'people',body:true,form:false},function(item,content){});
                category.add({label:'Log',icon:'text-indent-left',body:true,form:false},function(item,content){});
            })
    });
</script>
<!-- ======= End Settings ======= -->