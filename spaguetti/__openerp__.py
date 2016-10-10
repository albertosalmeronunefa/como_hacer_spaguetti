# -*- coding: utf-8 -*-
{
 
    'name': " hacer spaguetti",

    'summary': """
        como hacer spaguetti""",

    'description': """
        este modulo se explica como se hace el spaguetti
    """,

    'author': "Jenny Forero y Alberto Salmeron",
    

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'cocina',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base_setup'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
      #  'templates.xml',
        'spaguetti.xml',
    ],
  
      'installable': True,
    'auto_install': False,
}
