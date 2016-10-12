# -*- coding: utf-8 -*-


from openerp.osv import fields, osv

class spaguetti(osv.osv):
    _name='spaguetti.spaguetti'
    _rec_name='pasta'
    
    _columns = {
        'recipiente': fields.char('recipiente', required=True, help='Aquí se coloca una olla'),
        'elemento': fields.char('elemento', required=True, help='Aquí se coloca el agua'),
        'condimento1': fields.char('condimento 1', required=True, help='Aquí se coloca sal'),
        'condimento2': fields.char('condimento 2', required=True, help='Aquí se coloca el aceite'),
        'pasta': fields.char('pasta', required=True, help='Aquí se coloca la pasta'),
        'salsa': fields.char('salsa', required=True, help='Aquí se coloca la salsa'),
        'active': fields.boolean('cocinando'),
        
    }
    
    _defaults={
        'active':False,
    }
