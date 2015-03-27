use std::collections::HashMap;
use std::hash::Hash;
use std::borrow::Borrow;

#[derive(Debug,Clone)]
pub struct ForkTable<'a,K: 'a + Eq + Hash,V: 'a>  {
    table: HashMap<K, V>,
    whiteouts: Vec<K>,
    parent: Option<&'a ForkTable<'a,K,V>>
}

impl<'a,K,V> ForkTable<'a, K, V> where K: Eq + Hash {

    /// Returns a reference to the value corresponding to the key.
    ///
    /// If the key is defined in this level of the table, or in any
    /// of its' parents, a reference to the associated value will be
    /// returned.
    ///
    /// The key may be any borrowed form of the map's key type, but
    /// `Hash` and `Eq` on the borrowed form *must* match those for
    /// the key type.
    ///
    pub fn get<Q: ?Sized>(&self, key: &Q) -> Option<&V>
        where K: Borrow<Q>, Q: Hash + Eq {
            unimplemented!()
    }

    /// Returns a mutable reference to the value corresponding to the key.
    ///
    /// If the key is defined in this level of the table, or in any
    /// of its' parents, a reference to the associated value will be
    /// returned.
    ///
    /// The key may be any borrowed form of the map's key type, but
    /// `Hash` and `Eq` on the borrowed form *must* match those for
    /// the key type.
    ///
    pub fn get_mut<Q: ?Sized>(&mut self, key: &Q) -> Option<&mut V>
        where K: Borrow<Q>, Q: Hash + Eq {
            unimplemented!()
    }

    pub fn insert(&mut self, k: K, v: V) -> Option<V> {
        unimplemented!()
    }

    /// Returns true if the map contains a value for the specified key.
    ///
    /// Returns true if the key is defined in this level of the table, or
    /// in any of its' parents and is not whited out.
    ///
    /// The key may be any borrowed form of the map's key type, but
    /// `Hash` and `Eq` on the borrowed form *must* match those for
    /// the key type.
    ///
    pub fn contains_key<Q: ?Sized>(&self, k: &Q) -> bool  {
        unimplemented!()
    }
}